import {Matchers, PactWeb} from '@pact-foundation/pact-web';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {GroupService} from './group.service';
import {Group} from './group';

describe('GroupService #pact', () => {

    let provider: PactWeb;
    let groupService: GroupService;

    beforeAll(function (done) {
        provider = new PactWeb({
            consumer: 'ui',
            provider: 'api/groups',
            port: 1234,
            host: '127.0.0.1'
        });
        // required for slower CI environments
        setTimeout(done, 2000);
        // Required if run with `singleRun: false`
        provider.removeInteractions();
    });

    afterAll(function (done) {
        provider.finalize()
            .then(function () {
                done();
            }, function (err) {
                done.fail(err);
            });
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [GroupService]
        }).compileComponents();
    }));

    beforeEach(() => {
        groupService = TestBed.get(GroupService);
    });

    afterEach((done) => {
        provider.verify().then(done, e => done.fail(e));
    });

    describe('#getGroups', () => {

        const expectedGroup: Group = {id: 1, name: 'A', description: 'Ades', distance: 3, start: '06:00', return:'15:30'};

        beforeAll((done) => {
            provider.addInteraction({
                state: `provider returns all groups`,
                uponReceiving: 'a request to GET group list',
                withRequest: {
                    method: 'GET',
                    path: '/api/groups'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: Matchers.eachLike<Group>(expectedGroup)
                }
            }).then(done, error => done.fail(error));
        });

        it('should return expected groups', (done) => {

            groupService.getGroups().subscribe(
                response => {
                    expect(response).toEqual([expectedGroup]);
                    done();
                }, error => {
                    done.fail(error);
                });
        });
    });
});
