import { useId } from "react";

export const UseId = () => {
  const id = useId();

  return (
    <form>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="text" />
    </form>
  );
};

const App = () => {
  return (
    <>
      {" "}
      <>
        <UseId />
        <UseId />
      </>
    </>
  );
};
/* Scenario 1: Duplicate IDs
If multiple input elements share the same ID, such as id="email", screen readers cannot determine which label belongs to which input. It causes confusion, as the label-to-input association relies on the ID being unique.
Example:
html
Copy code
<form>
  <label for="email">Email</label>
  <input id="email" type="text" />
</form>
<form>
  <label for="email">Email</label>
  <input id="email" type="text" />
</form>
Here, both label elements point to the same id="email", leading to ambiguity. */

/* Assigning unique IDs for each form's input ensures that labels correctly map to their respective inputs. Screen readers use the for attribute of the label to find the input with the matching ID.
Example:
html
Copy code
<form>
  <label for="form1-email">Email</label>
  <input id="form1-email" type="text" />
</form>
<form>
  <label for="form2-email">Email</label>
  <input id="form2-email" type="text" />
</form>
In this case, screen readers read:
For the first form: "Email, input field"
For the second form: "Email, input field" However, they correctly associate the labels with their respective inputs because of unique IDs. */
