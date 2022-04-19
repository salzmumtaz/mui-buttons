import React from "react";
import { Switch, Button, Checkbox, FormGroup, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CheckBox = () => {
  const [value, setValue] = React.useState<any>("outlined");
  const [color, setColor] = React.useState<any>("success");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div style={{ marginTop: "25px" }}>
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

      <Typography variant="h5" mt="20px">
        Checkbox
      </Typography>
      <div>
        <FormControlLabel
          control={<Checkbox color={color} disabled size="medium" />}
          label="Label"
        />
        <FormControlLabel
          control={
            <Checkbox color={color} defaultChecked disabled size="medium" />
          }
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox color={color} size="medium" />}
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox color={color} defaultChecked size="medium" />}
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox color={color} indeterminate size="medium" />}
          label="Label"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <FormControlLabel
          control={<Checkbox color={color} disabled size="medium" />}
          label="Label"
        />
        <FormControlLabel
          control={
            <Checkbox color={color} defaultChecked disabled size="medium" />
          }
          label=""
        />
        <FormControlLabel
          control={<Checkbox color={color} size="medium" />}
          label=""
        />
        <FormControlLabel
          control={<Checkbox color={color} defaultChecked size="medium" />}
          label=""
        />
        <FormControlLabel
          control={<Checkbox color={color} indeterminate size="medium" />}
          label=""
        />
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox color={color} disabled size="small" />}
          label="Label"
        />
        <FormControlLabel
          control={
            <Checkbox color={color} defaultChecked disabled size="small" />
          }
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox color={color} size="small" />}
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox color={color} defaultChecked size="small" />}
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox color={color} indeterminate size="medium" />}
          label="Label"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <FormControlLabel
          control={<Checkbox color={color} disabled size="small" />}
          label="Label"
        />
        <FormControlLabel
          control={
            <Checkbox color={color} defaultChecked disabled size="small" />
          }
          label=""
        />
        <FormControlLabel
          control={<Checkbox color={color} size="small" />}
          label=""
        />
        <FormControlLabel
          control={<Checkbox color={color} defaultChecked size="small" />}
          label=""
        />
        <FormControlLabel
          control={<Checkbox color={color} indeterminate size="small" />}
          label=""
        />
      </div>
    </div>
  );
};

export default CheckBox;
