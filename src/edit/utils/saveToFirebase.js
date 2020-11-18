export const saveToFirebase = (layout, firebase, saveName, id, inputVals) => {
  if (!layout) {
    return;
  }
  const withData = layout.map((comp, index) => {
    if (
      comp.id === id
      // JSON.stringify(inputVals) !== JSON.stringify(myData.defaults)
    ) {
      comp.data = inputVals;
    }
    return comp;
  });
  saveName && firebase.items().child(saveName).set(withData);
};

