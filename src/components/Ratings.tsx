import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function Ratings() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          size="large"
        />
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          size="large"
          disabled
        />
      </div>
      <div style={{ padding: "20px" }}>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          size="medium"
        />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          size="medium"
          disabled
        />
      </div>
      <div style={{ padding: "20px" }}>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          size="small"
        />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          size="small"
          disabled
        />
      </div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}

export default Ratings;
