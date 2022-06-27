const fs = require('fs');
const path = require('path');
const ip = require('ip');

const envSpecPath = path.join(process.cwd(), 'env.spec.json');
const outPath = path.join(process.cwd(), '.env');

function interpolations(value) {
  return value.replace('{{ip}}', ip.address());
}

function generate() {
  const contents = fs.readFileSync(envSpecPath, 'utf-8');
  const specItems = JSON.parse(contents);
  const dotEnv = specItems.reduce((output, specItem) => {
    return [
      output,
      `# ${specItem.required ? 'Required:' : 'Optional:'} ${
        specItem.description
      }`,
      `${specItem.key}=${interpolations(specItem.suggestedLocalValue)}`,
    ]
      .join('\n')
      .trim();
  }, '');

  fs.writeFileSync(outPath, dotEnv);
}

generate();
