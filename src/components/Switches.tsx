import React from "react";
import { Switch, Button, Checkbox, FormGroup, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Switches = () => {
  const [color, setColor] = React.useState<any>("success");

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };

  return (
    <div>
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
      <div style={{ marginLeft: "180px", marginTop: "40px" }}>
        <Typography variant="h5" mt="20px">
          Switch
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked color={color} />}
            label="Label"
          />
          <FormControlLabel
            control={<Switch defaultChecked color={color} />}
            label=""
          />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
          <FormControlLabel
            control={<Switch size="small" defaultChecked color={color} />}
            label="Label"
          />
          <FormControlLabel
            control={<Switch size="small" defaultChecked color={color} />}
            label=""
          />
          <FormControlLabel
            disabled
            control={<Switch size="small" />}
            label=""
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Switches;
