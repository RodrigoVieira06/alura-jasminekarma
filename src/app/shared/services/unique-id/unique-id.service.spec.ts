import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdPrefix.name} DEVE gerar um id QUANDO chamado com um prefixo`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdPrefix('app');
    expect(id).toContain('app-');
  });
});
