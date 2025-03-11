import { Graph } from '@antv/g6';
import { useEffect, useRef } from 'react';
import { Card } from "antd";
import data from './data/data.json';

export default () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph>(); // 新增 graph 引用

  useEffect(() => {
    if (!containerRef.current) return;

    // 确保容器有明确尺寸
    containerRef.current.style.height = '600px';
    containerRef.current.style.width = '100%';

    const graph = new Graph({
      container: containerRef.current, // 修正容器引用
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      data,
      node: {
        style: {
          labelText: (d) => d.id,
          ports: [],
        },
        palette: {
          type: 'group',
          field: 'cluster',
        },
      },
      layout: {
        type: 'd3-force',
        collide: {
          strength: 0.5,
        },
      },
      behaviors: ['zoom-canvas', 'drag-canvas'],
    });

    graph.render();
    graphRef.current = graph;
  }, []);

  return (
    <Card>
      <div ref={containerRef} style={{ height: 600 }} /> {/* 确保容器高度 */}
    </Card>
  );
};
