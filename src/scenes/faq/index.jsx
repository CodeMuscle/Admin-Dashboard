import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          What is an admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          An admin dashboard is a web-based interface designed to provide administrators with a quick and easy way to monitor and manage various aspects of a website, application, or system. It typically displays important metrics, key performance indicators (KPIs), and other relevant information that can help administrators make informed decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          What kind of information can be displayed on an admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          An admin dashboard can display a wide range of information, depending on the needs of the administrator. Some common examples include website traffic data, user engagement metrics, sales figures, customer support tickets, system performance data, and security alerts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          How can I customize my admin dashboard to display the information I need?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Most admin dashboards offer a high degree of customization, allowing you to choose which metrics and data points are displayed on your dashboard. You can typically add or remove widgets, adjust the layout and color scheme, and set up custom alerts to stay informed about important changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          Can I access my admin dashboard from a mobile device?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Many admin dashboards are mobile-responsive, meaning they can be accessed and viewed on a smartphone or tablet. However, some features may be limited or unavailable on a smaller screen, so it's important to test your dashboard on multiple devices to ensure a seamless user experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          How can I ensure the security of my admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Admin dashboards often contain sensitive information, so it's important to take steps to secure your dashboard against unauthorized access. This may include implementing strong passwords, enabling two-factor authentication, limiting user access based on roles and permissions, and regularly monitoring your dashboard for any unusual activity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          How can an admin dashboard help with identifying and resolving performance issues?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Admin dashboards can display real-time or historical data on website or system performance metrics, such as page load times, server response times, and error rates. By analyzing this data, admins can identify performance issues and troubleshoot the root cause of the problem. Dashboards can also display logs and alerts that highlight any abnormalities or failures, enabling admins to take corrective action.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          Can an admin dashboard be customized to fit specific needs and workflows?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, many admin dashboards offer customization options, such as the ability to add or remove widgets, change the layout, and set up alerts based on specific thresholds or criteria. Admins can also integrate external data sources or services to enhance the functionality of the dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          How can an admin dashboard assist with managing user access and permissions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Admin dashboards can provide a centralized location for managing user access and permissions, such as adding or removing users, assigning roles, and modifying permissions. The dashboard can also display audit logs that track user activity and help identify any unauthorized access or security breaches.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
          What types of tools and integrations are commonly available on admin dashboards?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Admin dashboards can offer a variety of tools and integrations, such as analytics platforms, A/B testing tools, marketing automation software, content management systems, and customer relationship management systems. Integrating these tools can streamline workflows and enhance the functionality of the dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
