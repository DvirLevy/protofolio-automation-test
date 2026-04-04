import { test, expect } from '../infrastructure/fixture';
import HeroComponent from '../components/hero.component';
import ProjectsComponent from '../components/projects.component';
import { CardComponent } from '../components/card.component';

test('Projects Component Tests', { tag: '@projectsComponent' },
  async ({ OpenProtfolio }) => {
    const heroComponent = new HeroComponent(OpenProtfolio);
    const projectsComponent = new ProjectsComponent(OpenProtfolio);
    const cardComponent = new CardComponent(OpenProtfolio);

    await test.step('Navigate to Projects', async () => {
      await heroComponent.clickViewProjects();
      await expect(projectsComponent._projectsCards).toBeVisible();
    });

    await test.step('Verify projects list and first card contains a link and title', async () => {
      const count = await cardComponent.countCards();
      expect(count).toBeGreaterThan(0); // here check that it equal to the number of projects in the data file

      ;
      await cardComponent.cardsInpector();

    });
    await test.step('Verify github link display on the bottomof the component', async () => {
      await projectsComponent.assertGithubLinkOnTheBottomTheComponent()
    })
  });
