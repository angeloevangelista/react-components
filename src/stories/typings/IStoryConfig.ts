import { BaseMeta, ArgTypes } from '@storybook/addons/dist/ts3.9/types';

interface IStoryConfig<ComponentType> extends BaseMeta<ComponentType> {
  argTypes: ArgTypes;
}

export { IStoryConfig };
