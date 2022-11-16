import { setTeamState } from "../slices/myTeamsStateSlice";
import { setNavName } from "../slices/navNameSlice";
import { setPageState } from "../slices/pageSlice";
import { useAppDispatch } from "./reduxHook";

export const useResetTeamAndPage = () => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(setPageState([]));
    dispatch(
      setTeamState([
        {
          teamId: 0,
          name: "",
          imageUrl: "",
          teamUserRole: "",
        },
      ])
    );
    dispatch(setNavName("Welcome O:RE"));
  };
  return reset;
};
