import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

import {GroupService} from './group.service';
import {Group} from './group';

describe('GroupService', () => {
    let httpTestingController: HttpTestingController;
    let httpClient: HttpClient;
    let groupService: GroupService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GroupService]
        }).compileComponents();
    }));

    beforeEach(() => {
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        groupService = TestBed.get(GroupService);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests
        httpTestingController.verify();
    });

    describe('#getGroups', () => {
        let expectedGroups: Group[];

        beforeEach(() => {
            expectedGroups = [
                {id: 1, name: 'A', description: 'Ades'},
                {id: 2, name: 'B', description: 'Bdes'}
            ] as Group[];
        });

        it('should return expected groups (called once)', () => {

            groupService.getGroups().subscribe(
                response => expect(response).toEqual(expectedGroups, 'should return expected groups'),
                fail
            );

            // GroupService should have made one request to GET groups from expected URL
            const req = httpTestingController.expectOne(groupService.groupUrl);
            expect(req.request.method).toEqual('GET');

            // Respond with the mock groups
            req.flush(expectedGroups);
        });

        it('should be OK returning no groups', () => {

            groupService.getGroups().subscribe(
                response => expect(response.length).toEqual(0, 'should have empty groups array'),
                fail
            );

            const req = httpTestingController.expectOne(groupService.groupUrl);
            req.flush([]); // Respond with no heroes
        });

        it('should turn 404 into an empty heroes result', () => {

            groupService.getGroups().subscribe(
                response => expect(response.length).toEqual(0, 'should return empty groups array'),
                fail
            );

            const req = httpTestingController.expectOne(groupService.groupUrl);

            // respond with a 404 and the error message in the body
            const msg = 'deliberate 404 error';
            req.flush(msg, {status: 404, statusText: 'Not Found'});
        });

        it('should return expected groups (called multiple times)', () => {

            groupService.getGroups().subscribe();
            groupService.getGroups().subscribe();
            groupService.getGroups().subscribe(
                response => expect(response).toEqual(expectedGroups, 'should return expected groups'),
                fail
            );

            const requests = httpTestingController.match(groupService.groupUrl);
            expect(requests.length).toEqual(3, 'calls to getGroups()');

            // Respond to each request with different mock hero results
            requests[0].flush([]);
            requests[1].flush([{id: 1, name: 'C', description: 'Cdes'}]);
            requests[2].flush(expectedGroups);
        });
    });
});
