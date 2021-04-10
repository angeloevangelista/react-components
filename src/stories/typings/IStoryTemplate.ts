interface IStoryTemplate<ComponentProps> {
  (args: ComponentProps): JSX.Element;
  args?: ComponentProps;
}

export { IStoryTemplate };
