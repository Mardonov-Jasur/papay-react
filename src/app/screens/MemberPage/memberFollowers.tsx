import {
  Avatar,
  Box,
  Button,
  Pagination,
  PaginationItem,
  Stack
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { retrieveMemberFollowers } from "./selector";
import { setMemberFollowers } from "./slice";
import { FollowSearchObj, Follower } from "../../../types/follow";
import FollowApiService from "../../apiservices/followApiService";
import { serverApi } from "../../../lib/config";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert
} from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";
import { verifyMemberData } from "../../apiservices/verify";

/**REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispatch(setMemberFollowers(data))
});

/**REDUX SELECTOR */
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers
  })
);

const MemberFollowers = (props: any) => {
  const { followRebuild, setFollowRebuild, mb_id } = props;
  // INITIALIZATIONS
    const history = useHistory();
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    { page: 1, limit: 5, mb_id: mb_id }
  );

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followRebuild]);

  /**HANDLER */
  const subscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifyMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.subscribe(id);

      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const handlePaginationChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };

    const visitMemberHandler = (mb_id: string) => {
      history.push(`/member-page/other?mb_id=${mb_id}`);
      document.location.reload();
    };
  return (
    <Stack className="follower_content">
      {memberFollowers.map((follower: Follower) => {
        const image_path = follower?.subscriber_member_data?.mb_image
          ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
          : "/auth/user_3.webp";
        return (
          <Box className="follow_box">
            <Avatar
              alt=""
              style={{ cursor: "pointer" }}
              src={image_path}
              className="follower_img"
              onClick={() => visitMemberHandler(follower?.subscriber_id)}
            />
            <Box className="user_prof">
              <span className="user">
                {follower?.subscriber_member_data?.mb_type}
              </span>
              <span
                className="name"
                style={{ cursor: "pointer" }}
                onClick={() => visitMemberHandler(follower?.subscriber_id)}>
                {follower?.subscriber_member_data?.mb_nick}
              </span>
            </Box>
            {props.actions_enabled &&
              (follower?.me_followed &&
              follower?.me_followed[0]?.my_following ? (
                <Button
                  className="following_already"
                  variant="contained"
                  disabled>
                  Following
                </Button>
              ) : (
                <Button
                  className="following_btn"
                  variant="contained"
                  startIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none">
                      <path
                        d="M0.607363 23.5627L0.607371 23.5627C0.992135 22.6683 1.63406 21.9286 2.55523 21.3432C3.16614 20.9549 3.90473 20.6441 4.69657 20.3522C4.99076 20.2438 5.29883 20.1358 5.60861 20.0273C6.1066 19.8528 6.60903 19.6768 7.06544 19.4946C7.81476 19.1955 8.53674 18.845 9.07476 18.369C9.63056 17.8772 10.0007 17.24 10.0007 16.4079C10.0007 15.5874 9.68827 14.6073 9.09391 13.7428L8.6819 14.0261L9.0939 13.7428C8.7546 13.2493 8.50641 12.9404 8.18293 12.5376C7.97927 12.2841 7.74576 11.9934 7.44088 11.5961C6.7128 10.6473 6.4524 9.19919 6.4524 8.46859C6.4524 8.32708 6.47662 8.2822 6.47792 8.27979L6.47795 8.27975C6.47873 8.27829 6.47903 8.27769 6.48154 8.27513C6.48565 8.27096 6.49468 8.26274 6.51869 8.24534C6.52112 8.24358 6.52538 8.24069 6.53118 8.23676C6.57483 8.20718 6.70566 8.11851 6.79763 8.00778C6.93396 7.84365 6.9983 7.6435 6.9983 7.41294H6.99835L6.99826 7.40621C6.97941 6.00714 7.06855 4.85766 7.45327 3.89622C7.82852 2.95844 8.50138 2.1609 9.73678 1.49936L9.73679 1.49936C9.92886 1.3965 10.3139 1.29484 10.7765 1.22074C11.2229 1.14924 11.6717 1.11387 11.9475 1.11387H11.9729L11.998 1.11132C12.2475 1.08599 12.4627 1.0044 12.6254 0.826115C12.6937 0.751299 12.737 0.675233 12.7595 0.635503C12.766 0.623901 12.7712 0.61471 12.7754 0.607328C12.7854 0.589416 12.7895 0.582152 12.7928 0.576929C12.7992 0.573561 12.8117 0.567754 12.8328 0.56076C12.916 0.533096 13.0915 0.5 13.4406 0.5C14.8144 0.5 16.6591 1.10179 17.5335 2.88187C18.4713 4.79108 18.554 6.90761 18.554 7.41001C18.554 7.64057 18.6179 7.84078 18.7536 8.00528C18.8456 8.11673 18.976 8.20558 19.0201 8.23564C19.026 8.23964 19.0304 8.24261 19.0329 8.24444C19.0571 8.26203 19.0662 8.27037 19.0705 8.27468C19.0731 8.27737 19.0735 8.27807 19.0743 8.2796C19.0754 8.28161 19.0999 8.32622 19.0999 8.46859C19.0999 9.21079 18.8723 10.6506 18.1335 11.5917C17.8463 11.9577 17.6223 12.2326 17.4282 12.4708C17.0734 12.9063 16.8182 13.2195 16.4584 13.7428C15.9422 14.4935 15.6398 15.3162 15.5682 16.0664C15.5657 16.0733 15.5624 16.0818 15.5583 16.0921C15.5407 16.1368 15.5148 16.1961 15.4846 16.2601C15.4545 16.3237 15.4227 16.3866 15.3943 16.4385C15.3621 16.4973 15.346 16.5201 15.3472 16.5185L15.3472 16.5185C14.3142 17.8463 13.6997 19.5051 13.6997 21.3038C13.6997 22.7338 14.0882 24.0761 14.7672 25.2339C14.7677 25.2379 14.7683 25.2452 14.7678 25.2562C14.7664 25.2881 14.7567 25.3311 14.7365 25.3739C14.7232 25.4022 14.7091 25.4223 14.6983 25.4351H1.89725C1.11425 25.4351 0.5 24.8184 0.5 24.0826C0.499996 23.9044 0.536383 23.7277 0.607363 23.5627Z"
                        fill="#68C5CB"
                        stroke="white"
                      />
                      <path
                        d="M23.5972 23.0262L23.5958 24.5711C23.5958 24.5711 23.5958 24.5712 23.5958 24.5712C23.5952 25.2361 23.0454 25.7532 22.3947 25.7526L23.5972 23.0262ZM23.5972 23.0262L25.1945 23.0276C25.1945 23.0276 25.1945 23.0276 25.1945 23.0276C25.8453 23.0282 26.395 22.5111 26.3956 21.8462C26.3963 21.1812 25.8474 20.6631 25.1967 20.6626C25.1967 20.6626 25.1967 20.6626 25.1967 20.6626L23.5994 20.6612L23.6008 19.1163C23.6008 19.1163 23.6008 19.1163 23.6008 19.1163C23.6014 18.4513 23.0526 17.9333 22.4019 17.9327L23.5972 23.0262ZM21.1994 20.6591L21.2008 19.1142C21.2008 19.1141 21.2008 19.1141 21.2008 19.1141C21.2014 18.4492 21.7511 17.9321 22.4018 17.9327L21.1994 20.6591ZM21.1994 20.6591L19.602 20.6577C19.602 20.6577 19.602 20.6577 19.602 20.6577C18.9513 20.6571 18.4015 21.1742 18.4009 21.8391L21.1994 20.6591ZM19.5999 23.0227C18.9491 23.0221 18.4003 22.5041 18.4009 21.8392L19.5999 23.0227ZM19.5999 23.0227C19.5999 23.0227 19.5999 23.0227 19.5999 23.0227M19.5999 23.0227H19.5999M19.5999 23.0227L21.1972 23.0241L21.1958 24.569C21.1958 24.569 21.1958 24.569 21.1958 24.569C21.1952 25.2339 21.744 25.752 22.3947 25.7526L19.5999 23.0227ZM22.4008 26.8001C19.5721 26.8001 17.3008 24.5676 17.3008 21.8401C17.3008 19.1126 19.5721 16.8801 22.4008 16.8801C25.2294 16.8801 27.5007 19.1126 27.5007 21.8401C27.5007 24.5676 25.2294 26.8001 22.4008 26.8001Z"
                        fill="#68C5CB"
                        stroke="white"
                      />
                    </svg>
                  }
                  onClick={(e) => subscribeHandler(e, follower?.subscriber_id)}>
                  Follow back
                </Button>
              ))}
          </Box>
        );
      })}
      <Stack className="pagination">
        <Box className="bottom_box">
          <Pagination
            count={
              followersSearchObj.page >= 3 ? followersSearchObj.page + 1 : 3
            }
            page={followersSearchObj.page}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon
                }}
                {...item}
                color="secondary"
              />
            )}
            onChange={handlePaginationChange}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default MemberFollowers;
