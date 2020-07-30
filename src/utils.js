const render = (template, parent, place) => {
  parent.insertAdjacentHTML(place, template);
};

export {render};
