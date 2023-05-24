import { FC } from "react";

import { Card, CardHeader, Box, Button, Divider } from "@mui/material";
import PropTypes from "prop-types";

import { mainCategory } from "@src/types/product";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

interface RecentOrdersTableProps {
  className?: string;
  categories: mainCategory[];
}

const CategoryCard: FC<RecentOrdersTableProps> = ({ categories }) => {
  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={160}
      >
        <CardHeader title="카테고리" width={20} />
        <Button>
          <SettingsOutlinedIcon />
        </Button>
      </Box>
      <Divider />
    </Card>
  );
};

export default CategoryCard;
