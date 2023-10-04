import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { addCalButtons } from "../AddCalButtons";
import { sessionOne, sessionTwo } from "../consts.js";

export default class DetailsPanel extends React.Component {
  renderHero = () => {
    return (
      <EuiImage
        size="original"
        alt="Rainbow Stack Summit banner"
        src="https://firebasestorage.googleapis.com/v0/b/photo-url-generator-e736c.appspot.com/o/posts%2FUiuFw9e4h0ML4Felqkcp%2Fimage?alt=media&token=0575d483-9b65-4afa-b8cb-d9ac5336499a"
      />
    );
  };

  render() {
    return (
      <>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderHero()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup gutterSize="l">
          <EuiEmptyPrompt
            title={
              <span>
                Bringing Rainbow Stack members together to share ideas, learn
                from each other, and have fun together!
              </span>
            }
            body={
              <EuiText>
                Two sessions with different talks at each one, so join both if
                you can!
              </EuiText>
            }
            actions={[
              addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
              addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
            ]}
          />
        </EuiFlexGroup>
      </>
    );
  }
}
