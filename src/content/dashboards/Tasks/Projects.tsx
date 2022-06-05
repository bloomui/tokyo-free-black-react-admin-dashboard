import {
  Button,
  CardHeader,
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  AvatarGroup,
  LinearProgress,
  Badge,
  styled,
  useTheme
} from '@mui/material';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import Text from 'src/components/Text';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.8)};
    height: ${theme.spacing(1.8)};
    display: inline-block;
    border: 2px solid ${theme.colors.alpha.white[100]};
    margin-right: ${theme.spacing(0.5)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        height: 10px;
        margin: ${theme.spacing(1, 0, 2)};
        
        &.MuiLinearProgress-root {
          background-color: ${theme.colors.alpha.black[10]};
        }
        
        .MuiLinearProgress-bar {
          border-radius: ${theme.general.borderRadiusXl};
        }
`
);

function Projects() {
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Projects</Typography>
        <Box>
          <Button size="small" variant="outlined">
            View all projects
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0
              }}
              avatar={
                <AvatarWrapperSuccess>
                  <CheckTwoToneIcon />
                </AvatarWrapperSuccess>
              }
              action={
                <IconButton size="small" color="primary">
                  <MoreVertTwoToneIcon />
                </IconButton>
              }
              title="Fix Urgent Mobile App Bugs"
              titleTypographyProps={{
                variant: 'h5',
                color: 'textPrimary'
              }}
            />
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Tasks done:{' '}
                <Text color="black">
                  <b>25</b>
                </Text>
                <b> /100</b>
              </Typography>
              <LinearProgressWrapper
                value={25}
                color="primary"
                variant="determinate"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <AvatarGroup>
                <Tooltip arrow title="View profile for Remy Sharp">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/1.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Travis Howard">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Travis Howard"
                    src="/static/images/avatars/2.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Cindy Baker">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Cindy Baker"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Agnes Walker">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Agnes Walker"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/5.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
              <Box>
                <Tooltip arrow title="View project calendar" placement="top">
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{
                      ml: 0.5
                    }}
                  >
                    <CalendarTodayTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  arrow
                  title="Mark project as favourite"
                  placement="top"
                >
                  <IconButton
                    size="small"
                    sx={{
                      color: `${theme.colors.warning.main}`,
                      ml: 0.5
                    }}
                  >
                    <StarTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0
              }}
              avatar={
                <Avatar
                  sx={{
                    background: `${theme.colors.gradients.blue1}`
                  }}
                >
                  RP
                </Avatar>
              }
              action={
                <IconButton size="small" color="primary">
                  <MoreVertTwoToneIcon />
                </IconButton>
              }
              title="Replace Placeholder Images"
              titleTypographyProps={{
                variant: 'h5',
                color: 'textPrimary'
              }}
            />
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Tasks done:{' '}
                <Text color="black">
                  <b>80</b>
                </Text>
                <b> /100</b>
              </Typography>
              <LinearProgressWrapper
                value={80}
                color="primary"
                variant="determinate"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <AvatarGroup>
                <Tooltip arrow title="View profile for Remy Sharp">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Travis Howard">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Travis Howard"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/1.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
              <Box>
                <Tooltip arrow title="View project calendar" placement="top">
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{
                      ml: 0.5
                    }}
                  >
                    <CalendarTodayTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  arrow
                  title="Mark project as favourite"
                  placement="top"
                >
                  <IconButton
                    size="small"
                    sx={{
                      color: `${theme.colors.warning.main}`,
                      ml: 0.5
                    }}
                  >
                    <StarTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0
              }}
              avatar={
                <Badge
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  overlap="circular"
                  badgeContent={
                    <Tooltip arrow placement="top" title="Online right now">
                      <DotLegend
                        style={{ background: `${theme.colors.success.main}` }}
                      />
                    </Tooltip>
                  }
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatars/1.jpg" />
                </Badge>
              }
              action={
                <IconButton size="small" color="primary">
                  <MoreVertTwoToneIcon />
                </IconButton>
              }
              title="BloomUI Redesign Project"
              titleTypographyProps={{
                variant: 'h5',
                color: 'textPrimary'
              }}
            />
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Tasks done:{' '}
                <Text color="black">
                  <b>87</b>
                </Text>
                <b> /100</b>
              </Typography>
              <LinearProgressWrapper
                value={87}
                color="primary"
                variant="determinate"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <AvatarGroup>
                <Tooltip arrow title="View profile for Remy Sharp">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/1.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Cindy Baker">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Cindy Baker"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Agnes Walker">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Agnes Walker"
                    src="/static/images/avatars/2.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={RouterLink}
                    to="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
              <Box>
                <Tooltip arrow title="View project calendar" placement="top">
                  <IconButton
                    size="small"
                    color="secondary"
                    sx={{
                      ml: 0.5
                    }}
                  >
                    <CalendarTodayTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  arrow
                  title="Mark project as favourite"
                  placement="top"
                >
                  <IconButton
                    size="small"
                    sx={{
                      color: `${theme.colors.warning.main}`,
                      ml: 0.5
                    }}
                  >
                    <StarTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
