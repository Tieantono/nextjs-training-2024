import { WithSimpleLayout } from "@/components/SimpleLayout";
import { Page } from "@/types/Page";

const AboutPage : Page = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Welcome!</h2>
      <p>This is the about page</p>
    </div>
  );
}

AboutPage.layout = WithSimpleLayout;
export default AboutPage;