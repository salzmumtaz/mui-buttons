import React from "react";
import { Avatar, Button, Box, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Buttons = () => {
  const [value, setValue] = React.useState<any>("outlined");
  const [color, setColor] = React.useState<any>("primary");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <FormControl sx={{ marginTop: "10px" }}>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="contained"
            control={<Radio />}
            label="Contained"
          />
          <FormControlLabel
            value="outlined"
            control={<Radio />}
            label="Outlined"
          />
        </RadioGroup>
      </FormControl>{" "}
      <div style={{ marginBottom: "30px" }}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="controlled-radio-buttons-group"
            value={color}
            onChange={handleColor}
          >
            <FormControlLabel
              value="primary"
              control={<Radio />}
              label="Primary"
            />

            <FormControlLabel
              value="secondary"
              control={<Radio />}
              label="Secondary"
            />
            <FormControlLabel
              value="success"
              control={<Radio />}
              label="Success"
            />
            <FormControlLabel
              value="warning"
              control={<Radio />}
              label="Warning"
            />
            <FormControlLabel value="error" control={<Radio />} label="Error" />
          </RadioGroup>
        </FormControl>{" "}
      </div>
      {/* <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
        Click me
      </Button> */}
      <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
        SMALL
      </Button>
      <Button size="medium" color={color} sx={{ m: 1 }} variant={value}>
        MEDIUM
      </Button>
      <Button size="large" color={color} sx={{ m: 1 }} variant={value}>
        LARGE
      </Button>
      {/* <div style={{ marginTop: "10px" }}>
        <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
          Click me <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
        <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
          Click me <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
        <Button size="medium" color={color} sx={{ m: 1 }} variant={value}>
          Click me <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
        <Button size="large" color={color} sx={{ m: 1 }} variant={value}>
          Click me <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> Click me
        </Button>
        <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> Click me
        </Button>
        <Button size="medium" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> Click me
        </Button>
        <Button size="large" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> Click me
        </Button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button
          disabled
          size="small"
          color={color}
          sx={{ m: 1 }}
          variant={value}
        >
          Click me
        </Button>
        <Button
          disabled
          size="small"
          color={color}
          sx={{ m: 1 }}
          variant={value}
        >
          Click me
        </Button>
        <Button
          disabled
          size="medium"
          color={color}
          sx={{ m: 1 }}
          variant={value}
        >
          Click me
        </Button>
        <Button
          disabled
          size="large"
          color={color}
          sx={{ m: 1 }}
          variant={value}
        >
          Click me
        </Button> */}
      {/* </div> */}
    </div>
  );
};

export default Buttons;
