export function manageFriends(state = {
    friends: [],
  }, action) {
    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
        case "REMOVE_FRIEND":
            return (
                {...state,
                    friends: state.friends.filter(friend => friend.id !== action.id )
                }
            )
        default:
            return state
    }
}

//alternate code for case "REMOVE_FRIEND"
// case "REMOVE_FRIEND":
//       const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
//       return (
//         {...state,
//             friends: [
//               ...state.friends.slice(0, removalIndex),
//               ...state.friends.slice(removalIndex + 1)
//             ]
//         }
//       )