const checkboxes = document.querySelectorAll(".interest__check");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const parent = checkbox.closest(".interest");
    const children = parent.querySelectorAll(".interest__check");
    if (checkbox.checked) {
      children.forEach((child) => {
        child.checked = true;
      });
      checkParents(parent);
    } else {
      children.forEach((child) => {
        child.checked = false;
      });
      uncheckParents(parent);
    }
  });
});

function checkParents(parent) {
  const parentCheckbox = parent.querySelector(".interest__check");
  if (parentCheckbox) {
    parentCheckbox.checked = true;
    checkParents(parent.parentNode.closest(".interest"));
  }
}

function uncheckParents(parent) {
  const parentCheckbox = parent.querySelector(".interest__check");
  if (parentCheckbox) {
    const siblings = parent.querySelectorAll(".interest__check");
    let allUnchecked = true;
    siblings.forEach((sibling) => {
      if (sibling.checked) {
        allUnchecked = false;
      }
    });
    if (allUnchecked) {
      parentCheckbox.checked = false;
      uncheckParents(parent.parentNode.closest(".interest"));
    }
  }
}
