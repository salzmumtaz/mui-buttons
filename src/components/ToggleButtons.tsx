import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { Divider, ToggleButton } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div>
        <ToggleButtonGroup
          size="large"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ margin: "30px" }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <Divider flexItem orientation="vertical" sx={{}} />
        </ToggleButtonGroup>
        <ToggleButtonGroup
          size="large"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ margin: "30px" }}
        >
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          disabled
          size="large"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup
          size="medium"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ margin: "30px" }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <Divider flexItem orientation="vertical" sx={{}} />
        </ToggleButtonGroup>
        <ToggleButtonGroup
          size="medium"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ margin: "30px" }}
        >
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          disabled
          size="medium"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ margin: "30px" }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          sx={{ margin: "30px" }}
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          disabled
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ marginTop: "10px" }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          size="large"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ marginTop: "10px" }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          size="medium"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ marginTop: "10px" }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          size="small"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
}
