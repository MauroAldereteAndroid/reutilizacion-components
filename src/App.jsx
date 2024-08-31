import "./App.css";
import { SIMPLE_CARD, STATUS_CARD } from "./components/custom-card/constants";
import CustomCard from "./components/custom-card";
import { mockSimpleCard, mockSimpleCardClassName } from "./mock";

function App() {
  return (
    <>
      <CustomCard
        data={mockSimpleCard}
        classNaming={mockSimpleCardClassName}
        type={SIMPLE_CARD}
      />
      <CustomCard type={STATUS_CARD} />
      <CustomCard />
    </>
  );
}

export default App;
