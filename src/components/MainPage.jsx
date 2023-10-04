import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiSpacer,
} from "@elastic/eui";
import { React, useState } from "react";
import { rainbowCluster } from "../data/ImageRefs";
import { addCalButtons } from "./AddCalButtons";
import BottomBar from "./BottomBar";
import { sessionOne, sessionTwo } from "./consts";
import DetailsPanel from "./panels/DetailsPanel";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import TalksTBDPanel from "./panels/TalksTBDPanel";
import { makeRainbowText } from "./RainbowLetters";
import mixpanel from "mixpanel-browser";
import Recordings from "./Login";

function MainPage() {
  const [selectedTab, setSelectedTab] = useState("event");

  const onSelectedTabChanged = (id) => {
    setSelectedTab(id);
    mixpanel.track(`Visited tab ${id}`);
  };

  const showSelectedContent = (tab) => {
    switch (selectedTab) {
      case "event":
        return tabs[0].content;
      case "speakers":
        return tabs[1].content;
      case "talks":
        return tabs[2].content;
      // case "recordings":
      //   return tabs[3].content;
      default:
        return tabs[0].content;
    }
  };

  const tabs = [
    {
      id: "event",
      isSelected: selectedTab === "event",
      label: "Event Details",
      onClick: () => onSelectedTabChanged("event"),
      content: (
        <>
          <DetailsPanel />
        </>
      ),
    },
    {
      id: "speakers",
      isSelected: selectedTab === "speakers",
      label: "Speakers",
      onClick: () => onSelectedTabChanged("speakers"),
      content: (
        <>
          <SpeakersPanel />
        </>
      ),
    },
    {
      id: "talks",
      isSelected: selectedTab === "talks",
      label: "Talks",
      onClick: () => onSelectedTabChanged("talks"),
      content: <TalksPanel />,
    },
    // {
    //   id: "recordings",
    //   isSelected: selectedTab === "recordings",
    //   label: "Recordings",
    //   onClick: () => onSelectedTabChanged("recordings"),
    //   content: <Recordings />,
    // },
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <EuiPageHeader
            restrictWidth
            iconType={rainbowCluster}
            pageTitle={makeRainbowText()}
            rightSideItems={[
              addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
              addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
            ]}
            tabs={tabs}
          />

          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
            verticalPosition="center"
            horizontalPosition="center"
          >
            <EuiPageContentBody>
              {showSelectedContent(selectedTab)}
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
