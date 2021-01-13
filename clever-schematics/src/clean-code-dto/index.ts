import { normalize, strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { Schema } from './shema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function cleanCodeDto(_options: Schema): Rule {
  const path = _options.type === 'enum' ? 'enums' : 'dtos';
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files/' + _options.type);
    const sourceParametrazeTemplate = apply(sourceTemplates, [
      template({..._options, ...strings}),
      move(normalize('src/app/core/domain/' + path))
    ]);
    return mergeWith(sourceParametrazeTemplate)(tree, _context);
  };
}
