import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/logo.png" alt="logo-docker" width={150} height={150} />
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="text-6xl">CHPOKER</h1>
      </div>
      <div>
        <p>Здесь я собрал уже готовые решения насущной проблемы:</p>
        <code>
          {`Error response from daemon: pull access denied for nginx, repository
          does not exist or may require 'docker login': denied:{" "}
          <h1>403 Forbidden</h1> Since Docker is a US company, we must comply
          with US export control regulations. In an effort to comply with these,
          we now block all IP addresses that are located in Cuba, Iran, North
          Korea, Republic of Crimea, Sudan, and Syria. If you are not in one of
          these cities, countries, or regions and are blocked, please reach out
          to https://hub.docker.com/support/contact/{" "}`}
        </code>
      </div>
      <br />
      <div>
        Сказать спасибо: <a style={{ color: 'blue' }} href="https://yoomoney.ru/to/4100118369499588" target="_blank">https://yoomoney.ru/to/4100118369499588</a>
      </div><br />

      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">Решение 1</h2>
          Прокси от Яндекса:
          <br />
          <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold px-2">
              cr.yandex/mirror/alpine
            </code>
          </p>
          $ docker pull cr.yandex/mirror/alpine
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">          <h2 className="mb-3 text-2xl font-semibold">Решение 2</h2>
          Прокси от huecker.io:
          <br />
          <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold px-2">huecker.io</code>
          </p>
          <div>
            использование:1. через конфиг докера (как зеркало docker.io)
          </div>
          <br />
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>ОС</th>
                  <th>путь к файлу конфигурации</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Linux, regular setup</td>
                  <td>/etc/docker/daemon.json</td>
                </tr>
                <tr>
                  <td>Linux, rootless mode</td>
                  <td>~/.config/docker/daemon.json</td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td>C:\ProgramData\docker\config\daemon.json</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div>
            конфиг:
            <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              <code className="font-mono font-bold px-2">{`{ "registry-mirrors" : [ "https:\/\/huecker.io" ] }`}</code>
            </p>
            теперь при попытке загрузки образа, докер будет сначала пытаться
            использовать прокси
          </div>
          <div>2. явное указание адреса</div>
          <code className="font-mono font-bold px-2">
            $ docker pull huecker.io/library/alpine:latest
          </code>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">          <h2 className="mb-3 text-2xl font-semibold">Решение 3</h2>
          Другие прокси:
          <br />
          <table className="table-auto">
            <thead>
              <tr>
                <th>Адрес</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>https://mirror.gcr.io</td>
                <td>гугл</td>
              </tr>
              <tr>
                <td>https://daocloud.io</td>
                <td>китай</td>
              </tr>
              <tr>
                <td>https://c.163.com</td>
                <td>китай</td>
              </tr>
              <tr>
                <td>https://registry.docker-cn.com</td>
                <td>китай</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
