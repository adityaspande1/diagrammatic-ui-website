# Diagrammatic-UI

A powerful and flexible graph visualization library for React applications. Create stunning, interactive diagrams with ease.

## Features

- 🎨 Beautiful and customizable graph visualizations
- ⚡ High performance with optimized rendering
- 🎯 TypeScript support for better development experience
- 🔄 Interactive node dragging and zooming
- 📱 Responsive and mobile-friendly
- 🌙 Dark mode support
- 🎮 Interactive playground for experimentation

## Installation

```bash
npm install digrammatic-ui
# or
yarn add digrammatic-ui
```

## Quick Start

```tsx
import { Graph, Node, Edge } from 'digrammatic-ui';

function MyGraph() {
  return (
    <Graph>
      <Node id="1" position={{ x: 100, y: 100 }} label="Node 1" />
      <Node id="2" position={{ x: 300, y: 100 }} label="Node 2" />
      <Edge source="1" target="2" />
    </Graph>
  );
}
```

## Documentation

Visit our [documentation](https://digrammatic-ui.com/docs) for detailed guides and API references.

## Playground

Try out Diagrammatic-UI in our [interactive playground](https://digrammatic-ui.com/playground) to experiment with different graph configurations and features.

## Contributing

We welcome contributions! Please see our [contributing guide](CONTRIBUTING.md) for details.

## License

MIT © [Your Name]
