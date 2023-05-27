import { useState } from "react";

import { InputAdornment, TextField, Stack, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Stack sx={{ width: "75%" }}>
        <SeachWrapper>
          <DialogTitleWrapper>
            <SearchInputWrapper
              value={searchValue}
              autoFocus={true}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="상품명을 검색해주세요"
              fullWidth
              label="검색"
            />
          </DialogTitleWrapper>
        </SeachWrapper>
      </Stack>
    </>
  );
}

export default Search;

const SeachWrapper = styled(Stack)(
  () => `
    width { 80% }
    margin-bottom: 30px;
    background
  `
);

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
      .MuiInputBase-input {
          font-size: ${theme.typography.pxToRem(17)};
      }
  `
);

const DialogTitleWrapper = styled(DialogTitle)(
  ({ theme }) => `
      padding: ${theme.spacing(1)}
  `
);
