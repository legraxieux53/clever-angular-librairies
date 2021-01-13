import { SchematicsException, Tree } from "@angular-devkit/schematics";

export function getCurrentProject(tree: Tree, _options: any) {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException("Ce dossier n'est pas un projet Angular");
  }

  const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
  const projectName = _options.project || workspaceConfig.defaultProject;

  return workspaceConfig.projects[projectName];
}
