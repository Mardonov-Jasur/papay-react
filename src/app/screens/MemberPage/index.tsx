import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import VisitOtherPage from "./VisitOtherPage";
import VisitMyPage from "./VisitMyPage";

export function MemberPage(props: any) {
  const {verifiedMemberData} = props;
  const member = useRouteMatch();
  console.log(member);

  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage verifiedMemberData={verifiedMemberData} />
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage verifiedMemberData={verifiedMemberData} />
        </Route>
      </Switch>
    </div>
  );
}
