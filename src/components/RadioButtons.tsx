import React from "react";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioButtons = () => {
  const [color, setColor] = React.useState<any>("success");

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div>
        <Typography variant="h5" mt="20px">
          Radio buttons
        </Typography>
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
            <FormControlLabel value="text" control={<Radio />} label="Text" />
            <FormControlLabel value="error" control={<Radio />} label="Error" />
          </RadioGroup>
        </FormControl>{" "}
      </div>
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
              control={<Radio size="medium" color={color} />}
              label=""
            />

            <FormControlLabel
              value="secondary"
              control={<Radio size="medium" color={color} />}
              label=""
            />
            <FormControlLabel
              value="success"
              control={<Radio disabled color={color} />}
              label=""
            />
            <FormControlLabel
              value="warning"
              control={<Radio color={color} />}
              label=""
            />
            <FormControlLabel
              value="info"
              control={<Radio color={color} />}
              label=""
            />
            <FormControlLabel
              value="texts"
              control={<Radio color={color} />}
              label=""
            />
            <FormControlLabel
              value="error"
              control={<Radio color={color} />}
              label=""
            />
          </RadioGroup>
        </FormControl>{" "}
      </div>
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
              control={<Radio size="small" color={color} />}
              label="Label"
            />

            <FormControlLabel
              value="secondary"
              control={<Radio size="small" color={color} />}
              label="Label"
            />
            <FormControlLabel
              value="success"
              control={<Radio disabled size="small" color={color} />}
              label="Label"
            />
            <FormControlLabel
              value="warning"
              control={<Radio size="small" color={color} />}
              label="Label"
            />
            <FormControlLabel
              value="info"
              control={<Radio size="small" color={color} />}
              label="Label"
            />
            <FormControlLabel
              value="texts"
              control={<Radio size="small" color={color} />}
              label="Label"
            />
            <FormControlLabel
              value="error"
              control={<Radio size="small" color={color} />}
              label="Label"
            />
          </RadioGroup>
        </FormControl>{" "}
      </div>
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
              control={<Radio size="small" color={color} />}
              label=""
            />

            <FormControlLabel
              value="secondary"
              control={<Radio size="small" color={color} />}
              label=""
            />
            <FormControlLabel
              value="success"
              control={<Radio disabled size="small" color={color} />}
              label=""
            />
            <FormControlLabel
              value="warning"
              control={<Radio size="small" color={color} />}
              label=""
            />
            <FormControlLabel
              value="info"
              control={<Radio size="small" color={color} />}
              label=""
            />
            <FormControlLabel
              value="texts"
              control={<Radio size="small" color={color} />}
              label=""
            />
            <FormControlLabel
              value="error"
              control={<Radio size="small" color={color} />}
              label=""
            />
          </RadioGroup>
        </FormControl>{" "}
      </div>
    </div>
  );
};

export default RadioButtons;
