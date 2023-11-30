import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import VisitOtherPage from "./VisitOtherPage";
import VisitMyPage from "./VisitMyPage";

export function MemberPage() {
  const member = useRouteMatch();
  console.log(member);

  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage />
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage />
        </Route>
      </Switch>
    </div>
  );
}
