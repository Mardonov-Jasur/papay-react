// import React from "react";
// import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
// import VisitOtherPage from "./VisitOtherPage";
// import VisitMyPage from "./VisitMyPage";

// function useQuery() {
//   const { search } = useLocation();
//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

// export function MemberPage(props: any) {
//   const {verifiedMemberData} = props;
//   const member = useRouteMatch();
//    const query = useQuery();
//    const chosen_mb_id: string | null = query.get("mb_id") ?? null;
//    const chosen_art_id: string | null = query.get("art_id") ?? null;

//   return (
//     <div className="member_page">
//       <Switch>
//         <Route path={`${member.path}/other`}>
//           <VisitOtherPage
//             verifiedMemberData={verifiedMemberData}
//             chosen_mb_id={chosen_mb_id}
//             chosen_art_id={chosen_art_id}
//           />
//         </Route>
//         <Route path={`${member.path}`}>
//           <VisitMyPage verifiedMemberData={verifiedMemberData} />
//         </Route>
//       </Switch>
//     </div>
//   );
// }


import React from "react";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import VisitOtherPage from "./VisitOtherPage";
import VisitMyPage from "./VisitMyPage";

interface MemberPageProps {
  verifiedMemberData: any; // Replace 'any' with the actual type of verifiedMemberData
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function MemberPage(props: MemberPageProps) {
  const { verifiedMemberData } = props;
  const member = useRouteMatch();
  const query = useQuery();
  console.log("freeeeeee", query.get("test"))
  // const chosen_mb_id: string | null = query.get("mb_id") ?? null;
  // const chosen_art_id: string | null = query.get("art_id") ?? null;

  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage
            verifiedMemberData={verifiedMemberData}
            // chosen_mb_id={chosen_mb_id}
            // chosen_art_id={chosen_art_id}
          />
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage verifiedMemberData={verifiedMemberData} />
        </Route>
      </Switch>
    </div>
  );
}
