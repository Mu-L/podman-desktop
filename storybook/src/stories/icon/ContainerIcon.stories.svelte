<script context="module" lang="ts">
import ContainerIcon from '@podman-desktop/ui-svelte/icons/ContainerIcon';
import { type Args, defineMeta, type StoryContext } from '@storybook/addon-svelte-csf';

/**
 * Describe `ContainerIcon` component.
 */
const { Story } = defineMeta({
  component: ContainerIcon,
  render: template,
  title: 'Icon/ContainerIcon',
  tags: ['autodocs'],
});
</script>

{#snippet template({ _children, ...args }: Args<typeof Story>, _context: StoryContext<typeof Story>)}
  <ContainerIcon {...args} />
{/snippet}

<Story name="Basic" />
