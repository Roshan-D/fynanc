import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Stack,
  Divider,
  Container,
  Grid,
  Card,
  Paper
} from "@mui/material";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
import NestedGrid from "./NestedGrid";

const data = [
  { name: "Home", icon: <HomeOutlined /> },
  { name: "Inbox", icon: <InboxOutlined /> },
  { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
  { name: "Sent mail", icon: <MailOutline /> },
  { name: "Draft", icon: <DraftsOutlined /> },
  { name: "Trash", icon: <ReceiptOutlined /> },
];

export default function NavBar() {
  const getList = () => (
    <Stack>
      <Divider/>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </Stack>
  );

  return (
    <Container sx={{ display: "flex"}}>
      <Drawer
        variant="permanent"
        anchor={"left"}
      >
        {getList()}
      </Drawer>
      <NestedGrid/  >
    </Container>
  );
}
