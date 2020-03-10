# react-django-unchained ⚛️🐍🔓

React-django tutorials put together all-in-one with internationlization, authentication for those looking for clean, manageable React + Django folder structure. Building frontend server will be done manually by you (so that you can access React app from Django localhost) instead of starting React and Django separately in dev mode. The instructions on this will be written later.

<b>Open Incognito Mode Window on Chrome before starting localhost, and restart terminals / incognito window if you encounter error while logging out.</b>

### TBDs
- [ ] Navigation bar / routing
- [ ] Restructure with React Hooks
- [ ] Instructions on deployment / making build server

## Getting Started

### Prerequisites

* Yarn
* npm (Recommended, not required)
* Python 3
```bash
$ brew install python3
```
Pip3 is installed with Python3

##### Installation
To install virtualenv via pip run:
```bash
$ pip3 install virtualenv
```

### Installing

For React:

```bash
cd frontend
yarn
yarn start
```
For Django:

If there are any errors while pip installing, please resolve them first before continuing.
```bash
cd backend
source venv/bin/activate
(venv) pip install django
(venv) pip install djangorestframework
(venv) pip install django-rest-knox
cd vfinder3
python manage.py runserver
```
To deactivate the virtualenv
```bash
$ deactivate
```

## Deployment

TBD

## Built With

* [Django 3.0.3](https://docs.djangoproject.com/en/3.0/releases/3.0.3/) - The backend web framework used
* [React 16.13.0](https://reactjs.org/versions) - The frontend framework used

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **최동호** - *Initial work* - [kill8n](https://github.com/yungblud)
* **0xckylee** - *Revision, updates* - [0xckylee](https://github.com/0xckylee)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://blog.usejournal.com/internationalization-with-react-hooks-af37bed9f195
* https://velog.io/@killi8n/Dnote-7.-React-404%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%99%84%EC%84%B1-%EB%B0%91-%EB%B9%8C%EB%93%9C%EB%90%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%84%EC%9A%B0%EA%B8%B0-75jmep8mee
* https://codesandbox.io/s/9h4zw
* https://pipenv-fork.readthedocs.io/en/latest/basics.html
* https://gist.github.com/pandafulmanda/730a9355e088a9970b18275cb9eadef3