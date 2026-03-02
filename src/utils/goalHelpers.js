export const STATUS = {
  IN_PROGRESS: 'En cours',
  DONE: 'Terminé',
  ABANDONED: 'Abandonné',
};

export const NEXT_STATUS = {
  [STATUS.IN_PROGRESS]: STATUS.DONE,
  [STATUS.DONE]: STATUS.ABANDONED,
  [STATUS.ABANDONED]: STATUS.IN_PROGRESS,
};

export const STATUS_COLORS = {
  [STATUS.IN_PROGRESS]: '#3B82F6',
  [STATUS.DONE]: '#10B981',
  [STATUS.ABANDONED]: '#EF4444',
};

export const createGoal = (title) => ({
  id: Date.now().toString(),
  title,
  status: STATUS.IN_PROGRESS,
  createdAt: new Date(),
});