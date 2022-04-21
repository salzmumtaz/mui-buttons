import React from "react";

import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import Slider from "@mui/material/Slider";

function Sliders() {
  const [color, setColor] = React.useState<any>("success");
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };
  const valuetext = (value: number) => {
    return `${value}°C`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <div>
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
            <FormControlLabel value="info" control={<Radio />} label="Info" />
            <FormControlLabel value="texts" control={<Radio />} label="Text" />
            <FormControlLabel value="error" control={<Radio />} label="Error" />
          </RadioGroup>
        </FormControl>{" "}
      </div>
      <Box width={300} sx={{ margin: "auto", marginTop: "20px" }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          color={color}
        />
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          color={color}
          disabled
        />
        <Slider
          color={color}
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Slider
          color={color}
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          disabled
        />
      </Box>
      <Box
        sx={{
          width: 300,
          margin: "auto",
        }}
      >
        <Slider
          size="small"
          color={color}
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider
          size="small"
          color={color}
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
        <Slider
          color={color}
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
      <Box sx={{ width: 300, margin: "auto" }}>
        <Slider
          size="small"
          color={color}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Slider
          size="small"
          color={color}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disabled
        />
      </Box>
      <Box sx={{ width: 300, margin: "auto" }}>
        <Slider
          color={color}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Slider
          color={color}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disabled
        />
      </Box>
    </>
  );
}

export default Sliders;
