import {
  EuiAvatar,
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { talks } from "../../data/talks";
const moment = require("moment-timezone");

export default class TalksPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEst: false,
      sortField: "Session",
      sortDirection: "asc",
    };
  }

  createSortingObject() {
    return {
      sort: {
        field: this.state.sortField,
        direction: this.state.sortDirection,
      },
    };
  }

  getLocalTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  showTime = (timestamp) => {
    let localTime = moment.tz(timestamp, this.getLocalTimezone());
    let estTime = moment.tz(timestamp, "America/New_York");

    return this.state.showEst
      ? estTime.format("h:mm a z")
      : localTime.format("h:mm a z");
  };

  renderSpeakers = (speakers) => {
    if (speakers.length > 1) {
      return speakers.map((speaker) => (
        <>
          <EuiFlexItem>
            <EuiAvatar
              imageUrl={speaker.avatar}
              size="s"
              name={speaker.name}
              className="xMargin"
            />
            <EuiText>{speaker.name}</EuiText>
          </EuiFlexItem>
        </>
      ));
    } else {
      return (
        <>
          <EuiAvatar
            imageUrl={speakers[0].avatar}
            size="s"
            name={speakers[0].name}
            className="xMargin"
          />
          <EuiText>{speakers[0].name}</EuiText>
        </>
      );
    }
  };

  renderGenreTags = (tagName) => {
    let color = "";
    switch (tagName) {
      case "Show Me":
        return (color = "primary");
      case "Tech":
        return (color = "success");
      case "Self Care":
        return (color = "accent");
      case "LGBTQIA+":
        return (color = "warning");
      default:
        return (color = "default");
    }
  };

  columns = [
    {
      field: "sessionDetails",
      name: "Session",
      render: (sessionDetails) => (
        <EuiBadge
          color={sessionDetails.date === "Sept 8th" ? "primary" : "success"}
        >
          {sessionDetails.date}
        </EuiBadge>
      ),
      width: "100px",
    },
    {
      field: "sessionTime",
      name: "Time",
      sortable: true,
      render: (sessionTime) => (
        <>
          <EuiIcon type="clock" />
          {this.showTime(sessionTime)}
        </>
      ),
      width: "150px",
    },
    {
      field: "title",
      name: "Title",
      sortable: true,
    },
    {
      field: "description",
      name: "Description",
      sortable: true,
    },
    {
      field: "speaker",
      name: "Speaker",
      sortable: true,
      render: (speaker) => this.renderSpeakers(speaker),
    },
    {
      field: "genre",
      name: "Genre",
      sortable: true,
      render: (genre) => (
        <EuiBadge color={this.renderGenreTags(genre)}>{genre}</EuiBadge>
      ),
      width: "100px",
    },
    {
      name: "Actions",
      actions: [
        {
          name: "Add to cal",
          description: "Add session to your calendar",
          type: "icon",
          icon: "calendar",
          onClick: (e) => {
            window.open(e.sessionDetails.calendarLink, "_blank");
          },
        },
        {
          name: "Send me a slack reminder",
          description: "Get a reminder on slack about this session.",
          type: "icon",
          icon: "bell",
          onClick: () => {
            window.open("https://forms.gle/RMjnXyhqWervgand8", "_blank");
          },
        },
      ],
      width: "100px",
    },
  ];

  renderShowEstButton() {
    return (
      <EuiPanel>
        <EuiButton
          minWidth={"300px"}
          iconType="clock"
          onClick={() => {
            if (!this.state.showEst) {
              this.setState({ showEst: true });
            } else {
              this.setState({ showEst: false });
            }
          }}
        >
          Show times in {this.state.showEst ? "Local" : "EDT"}
        </EuiButton>
      </EuiPanel>
    );
  }

  render() {
    return (
      <>
        <EuiFlexGroup
          gutterSize="l"
          alignItems="center"
          justifyContent="flexEnd"
        >
          <EuiFlexItem grow={false}>{this.renderShowEstButton()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup className="xMargin">
          <EuiFlexItem>
            <EuiBasicTable
              items={talks}
              columns={this.columns}
              sorting={this.createSortingObject()}
              hasActions
              onChange={(e) => {
                this.setState({ sortField: e.sort.field });
                this.setState({ sortDirection: e.sort.direction });
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}
