import React from "react";
import { Switch, Button, Checkbox, FormGroup, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Buttons = () => {
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
            <FormControlLabel value="texts" control={<Radio />} label="Text" />
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
            <FormControlLabel value="warning" control={<Radio />} label="" />
            <FormControlLabel value="info" control={<Radio />} label="" />
            <FormControlLabel value="texts" control={<Radio />} label="" />
            <FormControlLabel value="error" control={<Radio />} label="" />
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
              control={<Radio size="small" />}
              label="Label"
            />
            <FormControlLabel
              value="info"
              control={<Radio size="small" />}
              label="Label"
            />
            <FormControlLabel
              value="texts"
              control={<Radio size="small" />}
              label="Label"
            />
            <FormControlLabel
              value="error"
              control={<Radio size="small" />}
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
              control={<Radio size="small" />}
              label=""
            />
            <FormControlLabel
              value="info"
              control={<Radio size="small" />}
              label=""
            />
            <FormControlLabel
              value="texts"
              control={<Radio size="small" />}
              label=""
            />
            <FormControlLabel
              value="error"
              control={<Radio size="small" />}
              label=""
            />
          </RadioGroup>
        </FormControl>{" "}
      </div>
      <Typography variant="h5" mt="20px">
        Buttons
      </Typography>
      <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
        SMALL
      </Button>
      <Button size="medium" color={color} sx={{ m: 1 }} variant={value}>
        MEDIUM
      </Button>
      <Button size="large" color={color} sx={{ m: 1 }} variant={value}>
        LARGE
      </Button>
      <div style={{ marginTop: "10px" }}>
        <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
          small <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
        <Button size="medium" color={color} sx={{ m: 1 }} variant={value}>
          Medium <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
        <Button size="large" color={color} sx={{ m: 1 }} variant={value}>
          Large <ArrowForwardIcon sx={{ fontSize: "1.7rem" }} />
        </Button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button size="small" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> small
        </Button>
        <Button size="medium" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> Medium
        </Button>
        <Button size="large" color={color} sx={{ m: 1 }} variant={value}>
          <ArrowBackIcon sx={{ fontSize: "1.7rem" }} /> Large
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
        </Button>
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
            label="Disabled"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Buttons;
