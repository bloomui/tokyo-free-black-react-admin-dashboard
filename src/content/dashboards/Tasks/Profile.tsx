import {
  Typography,
  Tooltip,
  Rating,
  IconButton,
  Divider,
  Box,
  ListItem,
  ListItemText,
  List,
  Avatar,
  useTheme
} from '@mui/material';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

function Profile() {
  const theme = useTheme();

  return (
    <Box>
      <Avatar
        sx={{
          mx: 'auto',
          mb: 1.5,
          width: theme.spacing(12),
          height: theme.spacing(12)
        }}
        variant="rounded"
        alt="Craig Donin"
        src="/static/images/avatars/4.jpg"
      />
      <Typography align="center" variant="h4" gutterBottom>
        Craig Donin
      </Typography>
      <Typography align="center" variant="subtitle2" gutterBottom>
        Senior Web Developer
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Rating value={4} defaultValue={5} precision={1} readOnly />
        <Typography
          variant="h5"
          sx={{
            pl: 0.5
          }}
        >
          4.1
        </Typography>
      </Box>

      <Box py={2} display="flex" alignItems="center" justifyContent="center">
        <Tooltip arrow placement="top" title="Call">
          <IconButton
            color="primary"
            sx={{
              mx: 0.5
            }}
          >
            <PhoneTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title="Send email">
          <IconButton
            color="primary"
            sx={{
              mx: 0.5
            }}
          >
            <EmailTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title="Send message">
          <IconButton
            color="primary"
            sx={{
              mx: 0.5
            }}
          >
            <MessageTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <List
        sx={{
          px: 2
        }}
      >
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Join Date"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography variant="subtitle2" color="text.primary">
            22 January 2021
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Company"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography variant="subtitle2" color="text.primary">
            Google Inc.
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5
          }}
        >
          <ListItemText
            primary="Tasks"
            primaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Typography
            variant="subtitle2"
            color="text.primary"
            fontWeight="bold"
          >
            67 active
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default Profile;
