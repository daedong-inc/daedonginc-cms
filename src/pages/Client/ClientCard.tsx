import { FC, ChangeEvent, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled,
} from "@mui/material";
import { Client } from "src/types/client";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

interface ClientProps {
  clients: Client[];
}

const ClientCard: FC<ClientProps> = ({ clients }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="고객사 추가하기">
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1,
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
        {clients.map((client) => (
          <Grid xs={12} sm={6} md={3} item>
            <Card
              sx={{
                px: 1,
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <img
                      src={client.image}
                      alt="고객사 로고"
                      style={{ width: "90%", marginRight: 8 }}
                    />

                    <Box
                      sx={{
                        pt: 3,
                      }}
                    >
                      <Typography variant="h3" gutterBottom noWrap>
                        {client.name}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <ButtonWarning
                    sx={{ ml: 1 }}
                    startIcon={<EditTwoToneIcon />}
                    variant="contained"
                  >
                    수정
                  </ButtonWarning>
                  <ButtonError
                    sx={{ ml: 1 }}
                    startIcon={<DeleteTwoToneIcon />}
                    variant="contained"
                  >
                    삭제
                  </ButtonError>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ClientCard;

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      margin: ${theme.spacing(2, 0, 1, -0.5)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(1)};
      padding: ${theme.spacing(0.5)};
      border-radius: 60px;
      height: ${theme.spacing(5.5)};
      width: ${theme.spacing(5.5)};
      background: ${
        theme.palette.mode === "dark"
          ? theme.colors.alpha.trueWhite[30]
          : alpha(theme.colors.alpha.black[100], 0.07)
      };
    
      img {
        background: ${theme.colors.alpha.trueWhite[100]};
        padding: ${theme.spacing(0.5)};
        display: block;
        border-radius: inherit;
        height: ${theme.spacing(4.5)};
        width: ${theme.spacing(4.5)};
      }
  `
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
          background: ${theme.colors.alpha.black[10]};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
  `
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
          border: ${theme.colors.primary.main} dashed 1px;
          height: 100%;
          color: ${theme.colors.primary.main};
          transition: ${theme.transitions.create(["all"])};
          
          .MuiCardActionArea-root {
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .MuiTouchRipple-root {
            opacity: .2;
          }
          
          &:hover {
            border-color: ${theme.colors.alpha.black[70]};
          }`
);

const ButtonError = styled(Button)(
  ({ theme }) => `
       background: ${theme.colors.error.main};
       color: ${theme.palette.error.contrastText};
  
       &:hover {
          background: ${theme.colors.error.dark};
       }
      `
);

const ButtonWarning = styled(Button)(
  ({ theme }) => `
       background: ${theme.colors.warning.main};
       color: ${theme.palette.warning.contrastText};
  
       &:hover {
          background: ${theme.colors.warning.dark};
       }
      `
);
