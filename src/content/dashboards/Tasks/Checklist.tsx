import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Tooltip
} from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { experimentalStyled } from '@material-ui/core/styles';
import RefreshTwoToneIcon from '@material-ui/icons/RefreshTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';

const TimelineWrapper = experimentalStyled(Timeline)(
  ({ theme }) => `
    margin-left: ${theme.spacing(2)};

    .MuiTimelineDot-root {
      left: -${theme.spacing(2)};
      margin-top: 0;
      top: ${theme.spacing(0.5)};
    }
    
    .MuiTimelineContent-root {
      padding-left: ${theme.spacing(4)};
    }
    
    .MuiFormControlLabel-root {
      margin-left: -${theme.spacing(0.7)};
    }
    
    .MuiFormControlLabel-label {
      color: ${theme.colors.alpha.black[50]};
    }
`
);

const CheckboxWrapper = experimentalStyled(Checkbox)(
  ({ theme }) => `
    padding: ${theme.spacing(0.5)};
`
);

function Checklist() {

  return (
    <Card>
      <CardHeader
        action={
          <Tooltip arrow title="Refresh list">
            <IconButton size="small" color="primary">
              <RefreshTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title="Checklist"
      />
      <CardContent>
        <TimelineWrapper>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <AssignmentTwoToneIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" sx={{ pb: 2 }}>
                Tasks Quick List
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Prepare website launch"
                />
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Build React Native application"
                />
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Fix remaining bugs for first 4 pages"
                />
              </FormGroup>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <AccountTreeTwoToneIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" sx={{ pb: 2 }}>
                Project Management
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Complete sales pitch"
                />
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Improve SEO visibility"
                />
              </FormGroup>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <BusinessCenterTwoToneIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" sx={{ pb: 2 }}>
                Business &amp; Marketing
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Create marketing campaign"
                />
                <FormControlLabel
                  control={<CheckboxWrapper color="primary" name="checkedC" />}
                  label="Sign business contract with partners"
                />
              </FormGroup>
            </TimelineContent>
          </TimelineItem>
        </TimelineWrapper>
      </CardContent>
    </Card>
  );
}

export default Checklist;
