import _ from 'lodash';
import { Node } from "@zaml/parser";

export function nodeEquals(node1: Node | undefined, node2: Node | undefined): boolean {
  if (node1 === node2) {
    return true;
  } else if (node1 === undefined || node2 === undefined) {
    return (node1 === undefined) === (node2 === undefined);
  } else {
    return JSON.stringify(node1.toJSON()) === JSON.stringify(node2.toJSON());
  }
}
