import { Tab } from "../../components/tabs/Tab";
import { Tabs } from "../../components/tabs/Tabs";

export const Information = (props: {}) => {
  return (
    <>
      <Tabs>
        <Tab title="Instructions">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, ipsa at voluptatibus rem quod iure, ea consequatur id
            distinctio neque laboriosam dolorum quisquam illum vitae numquam
            facilis. Soluta, reiciendis unde.
          </p>
        </Tab>
        <Tab title="Help Questions">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </Tab>
      </Tabs>
    </>
  );
};
