export const getGoalRankedByImportance = (customerGoals: any[]): any[] => {
  let _goalsExceptRetirement = customerGoals.slice(1);
  return _goalsExceptRetirement
    .sort((a, b) => a.goalImportance - b.goalImportance)
    .reverse();
};

export const getGoalImportance = (importance: number) => {
  switch (importance) {
    case 0:
      return "Nice to have";
    case 1:
      return "Important";
    case 2:
      return "Primary";
  }
};

export const getIsNotEveryGoalFocused = (goals: any[]) => {
  return goals.some(
    (obj) => obj.focused === false || obj.focused === undefined
  );
};
