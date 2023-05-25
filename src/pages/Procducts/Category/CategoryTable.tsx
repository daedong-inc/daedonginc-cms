import { FC, useState } from "react";
import {
  Card,
  CardHeader,
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import { MainCategory } from "@src/types/product";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface RecentOrdersTableProps {
  className?: string;
  categories: MainCategory[];
}

const CategoryCard: FC<RecentOrdersTableProps> = ({ categories }) => {
  const openObject: { [key: number]: boolean } = categories.reduce(
    (obj, category) => {
      obj[category.id] = true;
      return obj;
    },
    {}
  );

  const [open, setOpen] = useState(openObject);

  const showSubCategory = (categoryId: number) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [categoryId]: !prevOpen[categoryId as keyof typeof prevOpen],
    }));
  };

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={160}
      >
        <CardHeader title="카테고리" width={20} sx={{ minWidth: 20 }} />
        <Button>
          <SettingsOutlinedIcon />
        </Button>
      </Box>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemText primary="전체선택" />
        </ListItemButton>
        {categories.map((category) => (
          <div key={category.id}>
            <ListItemButton>
              <ListItemText primary={category.name} />
              {open[category.id] ? (
                <ExpandLess onClick={() => showSubCategory(category.id)} />
              ) : (
                <ExpandMore onClick={() => showSubCategory(category.id)} />
              )}
            </ListItemButton>
            <Collapse in={open[category.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.children?.map((subCategory) => (
                  <ListItemButton key={subCategory.id} sx={{ pl: 4 }}>
                    <ListItemText primary={subCategory.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Card>
  );
};
export default CategoryCard;
