import { FC, useState, useEffect } from "react";
import EditCategoryModal from "src/components/Modal/EditCategoryModal";

//type
import { Category } from "src/types/product";

//mui
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

//mui-icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface RecentOrdersTableProps {
  className?: string;
  categories: Category[];
}

const CategoryCard: FC<RecentOrdersTableProps> = ({ categories }) => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  console.log(isEditModalOpen);
  //초기 category toggle open
  useEffect(() => {
    const openObject: { [key: number]: boolean } = {};

    categories.forEach((category) => {
      openObject[category.categoryId] = true;
    });

    setOpen(openObject);
  }, [categories]);

  const showSubCategory = (categoryId: number) => {
    setOpen((prevOpen) => {
      const newOpen = { ...prevOpen };
      newOpen[categoryId] = !prevOpen[categoryId];
      return newOpen;
    });
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
        <Button onClick={() => setEditModalOpen(true)}>
          <SettingsOutlinedIcon />
        </Button>
      </Box>
      {isEditModalOpen && (
        <EditCategoryModal
          title="카테고리 편집"
          open={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
        />
      )}
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
          <div key={category.categoryId}>
            <ListItemButton>
              <ListItemText primary={category.categoryName} />
              {open[category.categoryId] ? (
                <ExpandLess
                  onClick={() => showSubCategory(category.categoryId)}
                />
              ) : (
                <ExpandMore
                  onClick={() => showSubCategory(category.categoryId)}
                />
              )}
            </ListItemButton>
            <Collapse
              in={open[category.categoryId]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {category.children?.map((subCategory) => (
                  <ListItemButton key={subCategory.categoryId} sx={{ pl: 4 }}>
                    <ListItemText primary={subCategory.categoryName} />
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
