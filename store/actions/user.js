export const addClip = ({ clip }) => {
  return {
    tyle: 'ADD_CLIP',
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    tyle: 'DELETE_CLIP',
    clip,
  };
};
