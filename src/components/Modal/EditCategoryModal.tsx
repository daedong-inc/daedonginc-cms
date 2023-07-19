import { FC, useState } from "react";
import Modal from ".";
import {
  Box,
  TextField,
  Card,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragEndResult,
} from "react-beautiful-dnd";
import { Category } from "src/types/product";

interface EditCategoryModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  width?: number;
}

const EditCategoryModal: FC<EditCategoryModalProps> = ({
  title,
  open,
  onClose,
  width,
}) => {
  const [isOpenAddCategoryTab, setIsOpenAddCategoryTab] = useState(false);

  //modal open됐을 때 카테고리 데이터 받아와서 넣기
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Category 1",
      children: [
        { id: 11, name: "Subcategory 1" },
        { id: 12, name: "Subcategory 2" },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      children: [{ id: 21, name: "Subcategory 3" }],
    },
  ]);

  const [selectedList, setSelectedList] = useState(-1);
  const handleCategorySelection = (categoryId: number) => {
    setSelectedList(categoryId);
  };

  const [newCategoryName, setNewCategoryName] = useState("");

  const handleCategoryNameChange = (categoryId: number, newName: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId ? { ...category, name: newName } : category
      )
    );
  };

  const handleAddCategory = () => {
    const newCategoryId = categories.length + 1;
    const newCategory = {
      id: newCategoryId,
      name: `Category ${newCategoryId}`,
      children: [],
    };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setIsOpenAddCategoryTab(true);
    setNewCategoryName(`Category ${newCategoryId}`);
    setSelectedList(newCategoryId);
  };

  const handleModalClose = () => {
    onClose();
    setIsOpenAddCategoryTab(false);
    setSelectedList(-1);
  };

  const saveCategories = (categories: Category[]) => {
    console.log("Saving categories:", categories);
  };

  const handleDragEnd = (result: DragEndResult) => {
    if (!result.destination) {
      return;
    }

    const { source, destination, draggableId } = result;

    const draggableIds = draggableId.split("-"); // "category-1" or "subcategory-11" 형식의 아이디를 분리합니다.
    const draggableType = draggableIds[0]; // "category" 또는 "subcategory"입니다.
    const draggableItemId = Number(draggableIds[1]); // 아이템 ID를 숫자로 변환합니다.

    const updatedCategories = [...categories];

    if (draggableType === "category") {
      const sourceCategoryIndex = updatedCategories.findIndex(
        (category) => category.id === draggableItemId
      );

      if (sourceCategoryIndex !== -1) {
        const sourceCategory = updatedCategories[sourceCategoryIndex];

        if (destination.droppableId === "categories") {
          // 드롭 대상이 상위 목록이라면 상위 목록으로 이동합니다.
          updatedCategories.splice(sourceCategoryIndex, 1);
          updatedCategories.splice(destination.index, 0, sourceCategory);
        } else if (destination.droppableId.startsWith("subcategory-")) {
          // 드롭 대상이 하위 목록이라면 하위 목록으로 이동합니다.
          const destinationCategoryId = Number(
            destination.droppableId.split("-")[1]
          );
          const destinationCategoryIndex = updatedCategories.findIndex(
            (category) => category.id === destinationCategoryId
          );

          if (destinationCategoryIndex !== -1) {
            const destinationCategory =
              updatedCategories[destinationCategoryIndex];
            sourceCategory.children.splice(source.index, 1);
            destinationCategory.children.splice(
              destination.index,
              0,
              sourceCategory
            );
          }
        }

        setCategories(updatedCategories);
      }
    }
  };

  return (
    <Modal title={title} open={open} onClose={handleModalClose} width={width}>
      <Box display="flex" gap={2}>
        <Card sx={{ flex: "0 0 50%", maxHeight: "70vh", overflow: "auto" }}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable
              droppableId="categories"
              direction="vertical"
              // droppableId를 categories로 설정하여 리스트를 드래그 할 수 있게 설정합니다.
            >
              {(provided) => (
                <List
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton
                    onClick={() => {
                      setIsOpenAddCategoryTab(true);
                      handleAddCategory();
                    }}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <AddCircleIcon color="primary" sx={{ marginRight: 2 }} />
                    카테고리 추가
                  </ListItemButton>
                  {/* Draggable 컴포넌트로 리스트 아이템을 감싸줍니다. */}
                  {categories.map((category, index) => (
                    <Draggable
                      key={category.id}
                      draggableId={`category-${category.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ListItemButton
                            onClick={() => {
                              handleCategorySelection(category.id);
                              setIsOpenAddCategoryTab(true);
                              setNewCategoryName(category.name);
                            }}
                            selected={selectedList === category.id}
                          >
                            <ListItemText primary={category.name} />
                            <HighlightOffIcon />
                          </ListItemButton>
                          <Collapse in={true} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {category.children?.map((subCategory, index) => (
                                <Draggable
                                  key={subCategory.id}
                                  draggableId={`subcategory-${subCategory.id}`}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <ListItemButton
                                        onClick={() => {
                                          handleCategorySelection(
                                            subCategory.id
                                          );
                                          setIsOpenAddCategoryTab(true);
                                          setNewCategoryName(subCategory.name);
                                        }}
                                        selected={
                                          selectedList === subCategory.id
                                        }
                                        key={subCategory.id}
                                        sx={{
                                          pl: 4,
                                          backgroundColor:
                                            selectedList === subCategory.id
                                              ? "lightblue"
                                              : "transparent",
                                        }}
                                      >
                                        <ListItemText
                                          primary={subCategory.name}
                                        />
                                        <HighlightOffIcon />
                                      </ListItemButton>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                            </List>
                          </Collapse>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
        </Card>
        <Card sx={{ flex: "0 0 50%" }}>
          {isOpenAddCategoryTab ? (
            <Box p={2}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                카테고리명
              </Typography>
              <TextField
                size="small"
                fullWidth
                value={newCategoryName}
                onChange={(e) => {
                  setNewCategoryName(e.target.value);
                  if (selectedList !== -1) {
                    handleCategoryNameChange(selectedList, e.target.value);
                  }
                }}
              />
            </Box>
          ) : (
            <Box p={2}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                카테고리 리스트를 drag하여 순서를 변경하실 수 있습니다.
              </Typography>
            </Box>
          )}
        </Card>
      </Box>
    </Modal>
  );
};

export default EditCategoryModal;
