import { strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { normalize } from 'path';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function cleanCodeBase(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrazeTemplate = apply(sourceTemplates, [
      template({..._options, ...strings}),
      move(normalize('src/app'))
    ]);
    return mergeWith(sourceParametrazeTemplate)(tree, _context);
  };
}
