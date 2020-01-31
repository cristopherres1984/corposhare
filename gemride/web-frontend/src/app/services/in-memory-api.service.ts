import {Injectable} from '@angular/core';
// @ts-ignore
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryApiService implements InMemoryDbService {

    createDb() {

        // url - /api/user
        const user = {
            id: 1, authorities: [], authenticated: true, name: 'user'
        };

        // url - /api/groups
        const groups = [
            {	id:	1	,name:	 'Troublemakers'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	1	, start:	"05:45"	, return:	"15:45"	},
            {	id:	2	,name:	 'Knights of the Rainbow'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	3	, start:	"05:45"	, return:	"15:45"	},
            {	id:	3	,name:	 'GGS'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	4	, start:	"05:45"	, return:	"15:45"	},
            {	id:	4	,name:	 '7devs1target'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	5	, start:	"05:45"	, return:	"15:45"	},
            {	id:	5	,name:	 'Girls Go Shopping'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	7	, start:	"05:45"	, return:	"15:45"	},
            {	id:	6	,name:	 'Me You Them'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	7	, start:	"05:45"	, return:	"15:45"	},
            {	id:	7	,name:	 'Yes Yes Yes'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	10	, start:	"05:45"	, return:	"15:45"	},
            {	id:	8	,name:	 'Michalinki'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	11	, start:	"05:45"	, return:	"15:45"	},
            {	id:	9	,name:	 'Aniorki'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	14	, start:	"05:45"	, return:	"15:45"	},
            {	id:	10	,name:	 'NBA'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	16	, start:	"05:45"	, return:	"15:45"	},
            {	id:	11	,name:	 'NHL'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	20	, start:	"05:45"	, return:	"15:45"	},
            {	id:	12	,name:	 'Polska'	,description:	'"Bezpiecznie, wolno, ekonomicznie i ekologicznie - to nasze hasło!"'	, distance:	21	, start:	"05:45"	, return:	"15:45"	}
        ];

        return {'user': user, 'groups': groups};
    }
}
